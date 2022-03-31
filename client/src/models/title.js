const url = `https://titlebot-welsh.herokuapp.com/api/v1`

class TitleModel {
    static all = () => {
        return fetch(`${url}/titles`, {
        })
            .then(res => res.json())
    }

    static create = (titleData) => {
        return fetch(`${url}/titles`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(titleData)
        })
            .then(res => res.json())
    }
}

export default TitleModel
