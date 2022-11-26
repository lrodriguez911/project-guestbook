const entries = [];

const renderIndex = (req, res) => {
res.render('index', {entries})
}

const renderNewEntry = (req, res) => {
    res.render('new-entry')
}

const createNewEntry =  (req, res) => {
    const {title, body} = req.body

    const newEntry = {
        title,
        body,
        published: new Date()
    }
    entries.push(newEntry)
    res.redirect('/')
    console.log(entries)
}


module.exports = {
    renderIndex,
    renderNewEntry,
    createNewEntry
}