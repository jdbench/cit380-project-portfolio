import { Document, Page, pdfjs } from "react-pdf";
import React, { useState } from "react";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export function PdfComponent(pdf){
    const [numPages, setNumPages] = useState(null);

    return (
        <div className="PDFDiv">
            <Document 
                width={document.getElementsByClassName('PDFDiv').clientWidth*1 ?? 150}
                file={pdf}
                onLoadSuccess={({ numPages }) => setNumPages(numPages)}
            >
                {Array.apply(null, Array(numPages))
                .map((x, i)=>i+1)
                .map(page=> <Page width={document.getElementsByClassName('PDFDiv').clientWidth*1 ?? 150} key={page} pageNumber={page}/>)}
            </Document>
            <style type='text/css'>
                {`
                    .react-pdf__Page__canvas, .react-pdf__Page__textContent{
                        margin: 0 auto;
                        width: 100% !important;
                        height: 100% !important;
                        overflow: hidden;
                    }
                `}
            </style>
        </div>
    )
}