// tady je místo pro náš program

const parseDate = (datum) => {
    let day = Number(datum.slice(0, 2))
    let month = Number(datum.slice(3, 5))
    let year = Number(datum.slice(6))
    return {
        day, month, year
    }
}


const formatDate = (datum) => {
    let [day, month, year] = Object.values(datum)
    return `${day}`.padStart(2, "0") + "." + `${month}`.padStart(2, "0") + "." + `${year}`.padStart(4, "0")
}

const round = (number) => {
    let fractial = number - Math.trunc(number)
    if (fractial < 0.5) { return Math.trunc(number) }
    if (fractial > 0.5) { return Math.trunc(number) + 1 }
    if (fractial === 0.5) { 
        if (Math.trunc(number) % 2 === 0)
            return Math.trunc(number)
        else 
            return Math.trunc(number) + 1
    }
}




