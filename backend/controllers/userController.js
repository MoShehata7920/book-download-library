const registerNewUser = async(req, res) => {
    const { name, email, password } = req.body;

    res.json({ name })
}