 import Contact from "../models/contact.models.js";
import { sendMail } from "../utils/sendMail.js";

/* ---------------- HTML Escape ---------------- */
function escapeHtml(str = "") {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

/* ---------------- Email Templates ---------------- */
const adminHtml = (c) => `
<h2>New Contact Message</h2>
<p><b>Name:</b> ${escapeHtml(c.firstName)} ${escapeHtml(c.lastName)}</p>
<p><b>Email:</b> ${escapeHtml(c.email)}</p>
<p><b>Phone:</b> ${escapeHtml(c.phone)}</p>
<p><b>Message:</b><br/>${escapeHtml(c.message)}</p>
<hr/>
<p><small>IP: ${escapeHtml(c.ipAddress)}</small></p>
`;

const userHtml = (c) => `
<p>Hello ${escapeHtml(c.firstName)},</p>
<p>Thank you for contacting <b>Gentle Hearts Home Health Care</b>.</p>
<p>We have received your message and will contact you shortly.</p>
<hr/>
<p><b>Your Message:</b><br/>${escapeHtml(c.message)}</p>
<br/>
<p>Warm regards,<br/>Gentle Hearts Care Team</p>
`;

/* ------------------------------------------------ */
/* CREATE CONTACT (PUBLIC)                          */
/* ------------------------------------------------ */
 export const createContact = (req, res) => {
  // ✅ respond instantly
  res.status(202).json({
    ok: true,
    message: "Message received. We will contact you shortly.",
  });

  // background work
  setImmediate(async () => {
    try {
      const { firstName, lastName, email, phone, message } = req.body;

      const contact = await Contact.create({
        firstName,
        lastName,
        email,
        phone,
        message,
        source: "Contact Page",
      });

      await sendMail({
        to: process.env.ADMIN_EMAIL,
        subject: "New Contact Message",
        html: `<p>${contact.message}</p>`,
      });
    } catch (err) {
      console.error("Background contact error:", err.message);
    }
  });
};



/* ------------------------------------------------ */
/* GET ALL CONTACTS (ADMIN)                         */
/* ------------------------------------------------ */
export const getAllContacts = async (_req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json({ ok: true, contacts });
  } catch (error) {
    res.status(500).json({ ok: false, error: error.message });
  }
};

/* ------------------------------------------------ */
/* GET CONTACT BY ID (ADMIN)                        */
/* ------------------------------------------------ */
export const getContactById = async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
      return res.status(404).json({ ok: false, message: "Contact not found" });
    }
    res.json({ ok: true, contact });
  } catch (error) {
    res.status(500).json({ ok: false, error: error.message });
  }
};

/* ------------------------------------------------ */
/* UPDATE CONTACT STATUS (ADMIN)                    */
/* ------------------------------------------------ */
export const updateContactStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const updated = await Contact.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );

    if (!updated) {
      return res.status(404).json({ ok: false, message: "Contact not found" });
    }

    res.json({ ok: true, contact: updated });
  } catch (error) {
    res.status(500).json({ ok: false, error: error.message });
  }
};

/* ------------------------------------------------ */
/* DELETE CONTACT (ADMIN)                           */
/* ------------------------------------------------ */
export const deleteContact = async (req, res) => {
  try {
    const deleted = await Contact.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ ok: false, message: "Contact not found" });
    }
    res.json({ ok: true, message: "Contact deleted successfully" });
  } catch (error) {
    res.status(500).json({ ok: false, error: error.message });
  }
};
