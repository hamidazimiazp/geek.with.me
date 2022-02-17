import React, { Component } from 'react';
import getCategories from "../../../../services/categories";



class Categories extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: []
        }
    }

    componentDidMount() {
        const categories = getCategories();
        this.setState({
            categories
        })
    }

    render() {
        return (
            <section className='categories'>
                <div className="container-fluid mt-5">
                    <div className="row justify-content-center text-center">
                        <div className="content text-white ">
                            <h2>
                                دسته بندی ها
                            </h2>
                        </div>
                    </div>
                    <div className="row justify-content-center text-center mt-5">
                        {
                            this.state.categories.map(category => {
                                return (
                                    <div className="col-12 col-sm-4 col-md-3 mt-2" key={category.id}>
                                        <div className="content">
                                            <a href="/category">
                                                {
                                                    <img src={category.imgUrl} alt="" width="180px" />
                                                }
                                                <div>
                                                    <h5 className='text-white'>
                                                        {category.title}
                                                    </h5>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
            </section>
        );
    }
}

export default Categories;