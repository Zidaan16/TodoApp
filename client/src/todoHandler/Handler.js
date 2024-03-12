async function deleteHandler(id) {
    const data = await fetch("/api/delete/"+id, {
        method: "DELETE",
        body: {
            _id: id
        }
    })
    const response = await data.json()

    if (data.ok) {
        return true
    } else {
        return false
    }
}

export {deleteHandler}