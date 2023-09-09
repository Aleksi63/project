export const Button = (props) => {
    const {onClick, name, type} = props;
    return (
        <button type={type} onClick={onClick}>{name}</button>
    );
};