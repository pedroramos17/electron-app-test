const func = async () => {
    const response = await window.test.ping()
    console.log(response)
}

func()