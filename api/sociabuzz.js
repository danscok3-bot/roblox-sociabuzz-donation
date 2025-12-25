let donations = []

export default function handler(req, res) {
  // webhook dari Sociabuzz
  if (req.method === "POST") {
    const body = req.body

    donations.push({
      nama: body.supporter_name || "Anonim",
      amount: Number(body.amount || 0),
      message: body.message || "",
      timestamp: Date.now()
    })

    return res.status(200).json({ ok: true })
  }

  // diambil Roblox
  if (req.method === "GET") {
    const data = [...donations]
    donations = [] // HAPUS setelah diambil (anti dobel)

    return res.status(200).json({
      success: true,
      donations: data
    })
  }

  res.status(405).end()
}
