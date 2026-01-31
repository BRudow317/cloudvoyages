import image from "@/assets/CloudVoyagesLogo6.png";

interface BrandTextProps {
  children?: React.ReactNode;
  className?: string;
}

export const BrandText = ({
  children = "Cloud Voyages",
  className = ""
}: BrandTextProps) => {
  return (
    <span
      className={`${className}`}
      style={{
        fontFamily: "'ansi-serif', 'Roboto', system-ui, sans-serif",
        color: "var(--cv-cloud)",
        fontWeight: 400,
        lineHeight: 1.2,
        letterSpacing: "0.04em",
        WebkitTextStroke: "0.12em var(--cv-deep-azure)",
        paintOrder: "stroke fill",
        textShadow: "0.125em 0.125em 0.25em rgba(0, 0, 0, 0.3)",
      }}
    >
      {children}
    </span>
  );
};

export const Brand = ({
    Styles = {
    BrandShell: {
      display: "flex",
      flexDirection: "row"  as const,
      justifyContent: "center",
      alignItems: "center",
      width: "110px",
      height: "110px",
      borderRadius: "999px",
    },

    Brand: {
      // display: "flex",
      // justifyContent: "center",
      // alignItems: "center",
      width: "60px",
      height: "60px",
    //   maxWidth: "300px",
    //   borderRadius: "999px",
      // objectFit: "contain",
      aspectRatio: "1 / 1",
    //   border: "1px solid var(--border-1)",
    },

    BrandName: {
      fontWeight: 650,
      letterSpacing: "-0.01em",
    },

    BrandMeta: {
      fontSize: "12px",
      color: "var(--text-1)",
      textShadow: "var(--text-shadow)",
      marginTop: "2px",
    },
    }
}) => {
    
    
    return (
    <div style={Styles.BrandShell}>
        <img 
            src={image} 
            alt="CloudVoyages Logo" 
            style={Styles.Brand}
        />
    </div>
    );
}