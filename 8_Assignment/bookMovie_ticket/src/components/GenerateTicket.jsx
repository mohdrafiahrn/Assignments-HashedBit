

// src/components/GenerateTicket.js
import { jsPDF } from "jspdf";

const GenerateTicket = (movie, date, phoneNumber) => {
  const doc = new jsPDF();
  doc.setFont("helvetica", "bold");

  doc.text("🎟 Movie Ticket 🎟", 70, 20);
  doc.setFontSize(14);
  doc.text(`Movie: ${movie}`, 20, 40);
  doc.text(`Date: ${date}`, 20, 50);
  doc.text(`Show Time: 1:30 PM`, 20, 60);
  doc.text(`Screen: 2`, 20, 70);
  doc.text(`Phone Number: ${phoneNumber}`, 20, 80);

  doc.save("Movie_Ticket.pdf");
};

export default GenerateTicket;
