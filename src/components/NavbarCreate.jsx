import { COLORS } from "@/constants/theme";
import DownloadForOfflineIcon from "@mui/icons-material/DownloadForOffline";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
export default function NavbarCreate() {
  const download = () => {
    const input = document.getElementById("resume");
    const zoom = document.getElementById("zoom");
    const originalTransform = zoom.style.transform;
    zoom.style.transform = "scale(1)";
    html2canvas(input, {
      scale: 6,
      useCORS: true,
    }).then((canvas) => {
      const imgData = canvas.toDataURL("image/jpeg", 0.9);
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4",
      });
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      pdf.addImage(imgData, "JPEG", 0, 0, pdfWidth, pdfHeight);
      pdf.save("resume.pdf");

      zoom.style.transform = originalTransform;
    });
  };
  return (
    <nav style={{ backgroundColor: COLORS.primary }}>
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex items-center ">
            <p className="text-gray-300 hover:text-white cursor-pointer">
              LOGO
            </p>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button
              type="button"
              className="relative rounded-xl bg-white px-8 py-1 hover:bg-blue-950 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              onClick={download}
            >
              <span className="font-black flex flex-row justify-center">
                <DownloadForOfflineIcon
                  color=""
                  fontSize="medium"
                  className="me-3"
                />
                Download
              </span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
