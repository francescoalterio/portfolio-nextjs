import Image from "next/image";
import React from "react";
import BgPresentation from "./BgPresentation";
import { useTheme } from "@nextui-org/react";

const Presentation = () => {
  const { theme } = useTheme();
  return (
    <>
      <BgPresentation>
        <div className="marco-yo">
          <Image
            src="/images/yo-blanco.jpg"
            style={{ borderRadius: "9999px" }}
            height={225}
            width={225}
            alt="francesco-alterio-caricatura"
          />
        </div>
      </BgPresentation>
      <style jsx>{`
        .marco-yo {
          width: 300px;
          height: 300px;
          border-radius: 200px;
          background-color: ${theme.colors.secondary.value};
          display: flex;
          justify-content: center;
          align-items: center;
          transition: 0.4s;
          box-shadow: 0 0 10px ${theme.colors.secondary.value};
        }

        .yo {
          border-radius: 9999px;
        }

        .marco-yo:hover {
          transform: scale(1.1);
        }
      `}</style>
    </>
  );
};

export default Presentation;
