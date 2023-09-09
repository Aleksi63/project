import { useState } from 'react';
import { Button, InputDiv, TextAreaDiv } from '../../globalComponents';

export const ProductAdd = () => {

    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');

    const changeTitle = (e) => {
        let titleValue = e.target.value;
        if (titleValue.length <= 12) {
            setTitle(titleValue);
        }
    }

    const changePrice = (e) => {
        let priceValue = e.target.value;
        priceValue = priceValue.replace( /[^\d.-]/g, '');
        let dotCount = priceValue.split('.');
        if (dotCount.length > 2 ||
            (dotCount[1] && dotCount[1].length > 2) ||
            (dotCount[0] && parseInt(dotCount[0]) > 1000)
            ) {
            return;
        }
        setPrice(priceValue);
    }

    const changeDescription = (e) => {
        let descValue = e.target.value
        if (descValue.length <= 120) {
            setDescription(descValue);
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault(); 
        const apiData = await fetch('https://dummyjson.com/products/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
        title: title,
        price: price,
        description: description
        })
    })
        if (apiData.status === 200) {
            alert('Product Added Successfully');
        }}
    return (
        <div className='add'>
            <form onSubmit={handleSubmit}>
                <InputDiv
                 className="inputName"
                    htmlFor='title'
                    name='Title'
                    Type='text'
                    Value={title}
                    OnChange={changeTitle}
                    required
                />
                <InputDiv
                    htmlFor='price'
                    name='Price'
                    Type='text'
                    Value={price}
                    OnChange={changePrice}
                    PlaceHolder='0.00'
                    required
                />
                <TextAreaDiv
                    htmlFor='description'
                    name='Description'
                    value={description}
                    onChange={changeDescription}
                    required
                />
                <div>
                <Button type='submit' name='Add Product'/>
                </div>
            </form>
        </div>
    );
};