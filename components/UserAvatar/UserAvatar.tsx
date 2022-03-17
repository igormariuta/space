const UserAvatar = ({ avatar, size = 20, borders = false }: any) => (
  <span
    className="d-block rounded-2 bg-light me-3"
    style={
      avatar
        ? {
            background:
              "no-repeat center url(" +
              (process.env.API_IMG ?? "") +
              (avatar.formats.thumbnail.url ?? "") +
              ")",
            backgroundSize: "cover",
            minWidth: `${size}px`,
            width: `${size}px`,
            height: `${size}px`,
            boxShadow: borders ? "0 0 0 4px #fff" : "",
          }
        : {
            backgroundColor: "var(--bs-light)",
            minWidth: `${size}px`,
            width: `${size}px`,
            height: `${size}px`,
            boxShadow: borders ? "0 0 0 4px #fff" : "",
          }
    }
  ></span>
);

export default UserAvatar;
