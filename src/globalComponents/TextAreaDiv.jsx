export const TextAreaDiv = (props) => {
    const {htmlFor, name, value, onChange} = props;
    return (
        <div>
            <label htmlFor={htmlFor}>{name}</label>
            <textarea
            value={value}
            onChange={onChange}
            required
            />
        </div>
    );
};