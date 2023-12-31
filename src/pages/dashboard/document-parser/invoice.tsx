import { Button } from '@mui/material';
import { useState } from 'react';
import { Invoice } from 'src/@types/invoiceParsers';
import { DropdownSection } from 'src/components/documentParser/InvoiceParser/DropdownSection';
import { InvoiceDetailsViewer } from 'src/components/documentParser/InvoiceParser/InvoiceDetailsViewer';
import DashboardLayout from 'src/components/layouts/dashboard/DashboardLayout';
import DashboardTemplate from 'src/components/layouts/dashboard/DashboardTemplate';
import { parseFactura } from 'src/lib/modules/invoiceParser';

Page.getLayout = (page: React.ReactElement) => <DashboardLayout>{page}</DashboardLayout>;

function Page() {
  const [files, setFiles] = useState<(File | string)[]>([]);
  const [parsedData, setParsedData] = useState<Invoice[]>([]);

  const handleUpload = () => {
    files.forEach((file) => {
      const reader = new FileReader();

      reader.onload = (e) => {
        const content = e.target?.result;

        if (content && typeof content === 'string') {
          const factura = parseFactura(content);

          if (factura) {
            setParsedData((prevData) => [...prevData, factura]);
          }
        }
      };

      reader.readAsText(file as Blob);
    });
  };

  const handleReset = () => {
    setFiles([]);
    setParsedData([]);
  };

  return (
    <DashboardTemplate
      documentTitle="Lector de Facturas"
      heading="Lector de Facturas"
      action={
        parsedData.length ? (
          <Button onClick={handleReset} variant="contained">
            Reset
          </Button>
        ) : undefined
      }
    >
      {parsedData.length ? (
        <InvoiceDetailsViewer data={parsedData} />
      ) : (
        <DropdownSection files={files} setFiles={setFiles} handleUpload={handleUpload} />
      )}
    </DashboardTemplate>
  );
}

export default Page;
