import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export function useNavBar() {
  const [contact, setContact] = useState(false);
  const [mobileMenuDeploy, setMobileMenuDeploy] = useState(false);
  const [sectionActive, setSectionActive] = useState("#");

  const router = useRouter();

  const handleClickMenu = () => {
    setMobileMenuDeploy(!mobileMenuDeploy);
  };

  const handleContact = () => {
    setContact(!contact);
  };

  console.log(mobileMenuDeploy);

  useEffect(() => {
    setSectionActive(router.asPath.split("/")[1]);
  }, [router.asPath]);

  return {
    mobileMenuDeploy,
    handleClickMenu,
    sectionActive,
    handleContact,
    contact,
  };
}
