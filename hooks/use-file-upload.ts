import { useState, useCallback } from "react";

export function formatBytes(bytes, decimals = 2) {
  if (!+bytes) return "0 Bytes";

  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`;
}

/**
 * Custom hook for single/multi file upload
 * @param {Object} options
 *  - maxSize: maximum file size in bytes
 *  - initialFiles: array of initial files
 * @returns [state, handlers]
 */
export function useFileUpload({
  maxSize = 10 * 1024 * 1024,
  initialFiles = [],
}) {
  const [files, setFiles] = useState(initialFiles);
  const [errors, setErrors] = useState([]);
  const [isDragging, setIsDragging] = useState(false);

  const validateFile = useCallback(
    (file) => {
      if (file.size > maxSize) {
        return `File ${file.name} is too large. Max size is ${formatBytes(
          maxSize
        )}`;
      }
      return null;
    },
    [maxSize]
  );

  const addFiles = useCallback(
    (newFiles) => {
      const fileArray = Array.from(newFiles);
      const validatedFiles = [];
      const newErrors = [];

      fileArray.forEach((file) => {
        const error = validateFile(file);
        if (error) newErrors.push(error);
        else
          validatedFiles.push({
            id: `${file.name}-${Date.now()}`,
            file,
          });
      });

      setFiles((prev) => [...prev, ...validatedFiles].slice(0, 1)); // single file
      setErrors(newErrors);
    },
    [validateFile]
  );

  const handleDragEnter = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files) addFiles(e.dataTransfer.files);
  };

  const openFileDialog = () => {
    document.getElementById("hidden-file-input")?.click();
  };

  const getInputProps = () => ({
    id: "hidden-file-input",
    type: "file",
    onChange: (e) => addFiles(e.target.files),
    accept: "*/*",
  });

  const removeFile = (id) => {
    setFiles((prev) => prev.filter((f) => f.id !== id));
    setErrors([]);
  };

  return [
    { files, isDragging, errors },
    {
      handleDragEnter,
      handleDragLeave,
      handleDragOver,
      handleDrop,
      openFileDialog,
      removeFile,
      getInputProps,
    },
  ];
}
