interface Props {
    id?: number
}

export const Item = ({ id }: Props) => {
    return (
        <div>
            id: {id}
        </div>
    )
};