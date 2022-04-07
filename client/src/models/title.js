// const url = `http://localhost:4000/api/v1/titles`
const url = `https://titlebot-welsh.herokuapp.com/api/v1/titles`

class TitleModel {
    static all = () => {
        return fetch(`${url}`, {
        })
            .then(res => res.json())
    }

    static create = (titleUrl) => {
        return fetch(`${url}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(titleUrl)
        })
            .then(res => res.json())
    }
}

export default TitleModel
