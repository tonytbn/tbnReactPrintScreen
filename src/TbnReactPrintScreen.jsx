import { createElement } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import "./ui/TbnReactPrintScreen.css";

export function TbnReactPrintScreen({ className, preFix }) {
    const exportPDF = () => {
        const newDate = new Date().getTime();
        const newDateString = newDate.toString();
        const input = document.getElementsByClassName(className)[0];
        html2canvas(input, { logging: true, letterRendering: 1, useCORS: true }).then(canvas => {
            const imgWid = 208;
            const imgHei = (canvas.height * imgWid) / canvas.width;
            const imgData = canvas.toDataURL("img/png");
            const pdf = new jsPDF("p", "mm", "a4");
            pdf.addImage(imgData, "PNG", 0, 0, imgWid, imgHei);
            pdf.save(preFix + "-" + newDateString + ".pdf");
        });
    };
    return (
        <div>
            <button type="button" class="btn btn-default btn-sm" onClick={() => exportPDF()}>
                <span class="glyphicon glyphicon-camera"></span>
            </button>
        </div>
    );
}