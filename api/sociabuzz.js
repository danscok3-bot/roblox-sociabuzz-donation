let donations = []

export default function handler(req, res) {
  if (req.method === "POST") {
    const body = req.body

    donations.push({
      nama: body.nama || "Anonymous",
      amount: Number(body.amount) || 0,
      message: body.message || "",
      email: body.email || "",
      id: Date.now(),
      timestamp: Date.now()
    })

    return res.status(200).json({ success: true })
  }

  if (req.method === "GET") {
    const result = [...donations]
    donations = [] // kosongkan setelah diambil Roblox

    return res.status(200).json({
      success: true,
      donations: result
    })
  }

  res.status(405).json({ error: "Method not allowed" })
}
