import { Document, Page, pdfjs } from "react-pdf";
import React, { useState } from "react";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export function PdfComponent(pdf){
    const [numPages, setNumPages] = useState(null);

    return (
        <div>
            <Document 
                file={pdf}
                onLoadSuccess={({ numPages }) => setNumPages(numPages)}
            >
                {Array.apply(null, Array(numPages))
                .map((x, i)=>i+1)
                .map(page=> <Page pageNumber={page}/>)}
            </Document>
        </div>
    )
}