import { ReactNode } from "react";
// import "./style.css";
const EmptyResponse = ({
  image = "/images/emptyBox.svg",
  title,
  btn,
  description,
  ...props
}: {
  image?: string | ReactNode;
  title: string;
  btn?: ReactNode;
  description?: string;
}) => {
  return (
    <div
      {...props}
      className="empty-response-pg  mt-4 d-flex justify-content-between flex-column align-items-center"
    >
      {typeof image === "string" ? <img src={image} alt="no result" /> : image}
      <h3 className="h3">{title}</h3>
      {description && (
        <p style={{ color: "#8F9BB2" }} className="fs-6">
          {description}
        </p>
      )}
      {btn && btn}
    </div>
  );
};

export default EmptyResponse;
