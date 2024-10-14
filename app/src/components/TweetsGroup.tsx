export type Props = {
  avatarItems: {
    profileImageUrl: string;
  }[];
};

export function TweetsGroup(props: Props) {

  return (
    <div className="avatar-group -space-x-3">
      {items.map((item) => (
        <div className="avatar" key={item.profileImageUrl}>
          <div className="w-6 h-6">
            <img src={item.profileImageUrl} />
          </div>
        </div>
      ))}
      {moreItems && (
        <div className="avatar placeholder">
          <div className="w-6 h-6 bg-neutral-focus text-neutral-content">
            <span className="text-xs font-normal">
              +{props.avatarItems.length}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
