export const InputDiv = (props) => {
    const {htmlFor, name, Type, Value, OnChange, PlaceHolder} = props;
    return (
        <div>
        <label htmlFor={htmlFor}>{name}</label>
        <input type={Type}
        value={Value}
        onChange={OnChange}
        placeholder={PlaceHolder}
        required
        />
        </div>
    );
};