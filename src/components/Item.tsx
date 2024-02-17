import { FC, PropsWithChildren } from "react";

interface IItemProps {
  bg?: string;
}

export const Item: FC<PropsWithChildren<IItemProps>> = ({ children, bg }) => {
  return (
    <div
      style={{
        padding: 10,
        borderRadius: 10,
        cursor: "pointer",
        backgroundColor: bg || "rgb(159, 112, 253)",
      }}
    >
      {children}
    </div>
  );
};
