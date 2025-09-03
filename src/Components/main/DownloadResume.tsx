import { Download } from "lucide-react";
import Button from "@/Components/Button";

export default function DownloadResume() {
  return (
    <Button
      text="Download my Resume"
      textColor="#242424"
      icon={Download}
      iconProps={{ size: 20, strokeWidth: 1, color: "black" }}
      btnHeight="64px"
      btnRadius="50px"
      bgColor="#FFFFFF"
      borderColor="#A7A7A7"
      hover={["bg-gray-100", "scale-105", "shadow"]}
      href="/Nextjs and Langchain resume.pdf"
      download 
      arialabel="Download Resume"
    />
  );
}
