import { LoaderCircle } from "lucide-react";
import React from "react";

const Loading = ({
  loading,
  children,
}: {
  loading: boolean;
  children: string | React.ReactNode;
}) => {
  return loading ? (
    <span className="flex gap-1 justify-center">
      Loading...
      <span className="animate-spin">
        <LoaderCircle></LoaderCircle>
      </span>
    </span>
  ) : (
    <span>{children}</span>
  );
};

export default Loading;
