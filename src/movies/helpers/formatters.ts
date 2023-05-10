export const truncate = (input: string, numberOfString: number) => {
    if (input.length > numberOfString) {
        return input.substring(0, numberOfString) + '...'
    }
    return input
}
