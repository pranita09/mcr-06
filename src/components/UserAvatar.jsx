export const dummyProfileImage =
  "https://res.cloudinary.com/dxnbnviuz/image/upload/v1687603602/socialMedia/AvatarTwo_isbynr.png";

export const UserAvatar = (props) => {
  const { className } = props;

  const classesForImg = className + " rounded-full object-cover";

  const avatar = props?.profileImage;

  return (
    <span className="cursor-pointer select-none">
      {avatar ? (
        <img
          src={avatar}
          alt={props?.user?.firstName}
          className={classesForImg}
        />
      ) : (
        <img
          src={dummyProfileImage}
          alt="DummyProfile"
          className={classesForImg}
        />
      )}
    </span>
  );
};
