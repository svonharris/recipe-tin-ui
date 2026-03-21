import * as Icons from "../../icons";

const iconNames = Object.keys(Icons) as (keyof typeof Icons)[];

export const IconGallery = () => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(100px, 1fr))",
        gap: 24,
      }}
    >
      {iconNames.map((name) => {
        const Icon = Icons[name] as React.ComponentType<{ size?: number }>;
        return (
          <div
            key={name}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 8,
            }}
          >
            <Icon size={28} />
            <span
              style={{
                fontSize: 11,
                textAlign: "center",
                wordBreak: "break-word",
                color: "#545454",
              }}
            >
              {name}
            </span>
          </div>
        );
      })}
    </div>
  );
};
