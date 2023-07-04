type Link = {
    title: string
    link: string
    description: string
}

type Marker = {
    title: string
    link: string
    imgUrl?: string
}

type Note = {
    content: string
    date: string
}

type Content = {
    markers: Marker[]
    links: Link[]
    notes: Note[]
}

type WeatherData = {
    temp: number
    max: number
    min: number
    info: "Clear" | "Clouds" | "Drizzle" | "Rain" | "Thunderstorm" | "Mist"
}

type ThemeColors = "sky" | "cyan" | "indigo" | "amber" | "emerald" | "pink"