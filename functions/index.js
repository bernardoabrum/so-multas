const { onDocumentCreated } = require("firebase-functions/v2/firestore");
const { google } = require("googleapis");
const { setGlobalOptions } = require("firebase-functions");

setGlobalOptions({
  region: "southamerica-east1",
  maxInstances: 1,
});

exports.onCreateLead = onDocumentCreated(
  {
    document: "leads/{leadId}",
  },
  async (event) => {
    const snapshot = event.data;
    if (!snapshot) return;

    const data = snapshot.data();

    console.log("Enviando lead para planilha:", event.params.leadId);

    const auth = new google.auth.GoogleAuth({
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const authClient = await auth.getClient();

    const sheets = google.sheets({
      version: "v4",
      auth: authClient,
    });

    const dataFormatada = data.data.toDate
      ? data.data
          .toDate()
          .toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" })
      : "";

    await sheets.spreadsheets.values.append({
      spreadsheetId: "1cUMtm8JcetvytsrZjVlDZMLl1TBZR4kxs8HYKDFbGQs",
      range: "A:E",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [
          [
            event.params.leadId,
            data.nome || "",
            data.email || "",
            data.telefone || "",
            dataFormatada,
          ],
        ],
      },
    });

    console.log("Lead enviado com sucesso!");
  },
);
