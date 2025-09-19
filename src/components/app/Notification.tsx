import type  {FC} from "react"
import classNames from "classnames";

interface NotificationProps {
  type?: "success" | "error" | "info" | "warning";
  title?: string;
  message?: string;
  onClose?: () => void;
}

export const Notification: FC<NotificationProps> = ({
  type = "success",
  title,
  message,
  onClose,
}) => {
  const typeStyles = {
    success: {
      bg: "bg-green-50",
      border: "border-green-500",
      text: "text-green-700",
      icon: (
        <svg
          className="w-6 h-6 text-green-500"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      ),
      defaultTitle: "Success",
    },
    error: {
      bg: "bg-red-50",
      border: "border-red-500",
      text: "text-red-700",
      icon: (
        <svg
          className="w-6 h-6 text-red-500"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      ),
      defaultTitle: "Error",
    },
    info: {
      bg: "bg-blue-50",
      border: "border-blue-500",
      text: "text-blue-700",
      icon: (
        <svg
          className="w-6 h-6 text-blue-500"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M12 20h.01" />
        </svg>
      ),
      defaultTitle: "Info",
    },
    warning: {
      bg: "bg-yellow-50",
      border: "border-yellow-500",
      text: "text-yellow-700",
      icon: (
        <svg
          className="w-6 h-6 text-yellow-500"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.054 0 1.502-1.276.732-2.024L13.732 4.98a1.25 1.25 0 00-2.464 0L4.342 17.976c-.77.748-.322 2.024.732 2.024z" />
        </svg>
      ),
      defaultTitle: "Warning",
    },
  };

  const current = typeStyles[type];

  return (
    <div
      className={classNames(
        "flex items-start justify-between p-4 rounded-md shadow-md max-w-md",
        current.bg,
        current.border
      )}
    >
      <div className="flex items-start space-x-3">
        <div>{current.icon}</div>
        <div>
          <div className={`font-semibold ${current.text}`}>
            {title || current.defaultTitle}
          </div>
          <p className={`text-sm ${current.text}`}>{message}</p>
        </div>
      </div>
      {onClose && (
        <button onClick={onClose} className={`ml-4 ${current.text} hover:opacity-70`}>
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      )}
    </div>
  );
};
