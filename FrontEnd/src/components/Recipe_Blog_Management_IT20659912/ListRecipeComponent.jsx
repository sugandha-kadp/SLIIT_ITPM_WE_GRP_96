import React, { Component } from 'react'
import '../../App.css';
import RecipeService from '../../services/RecipeService';

class ListRecipeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            Recipes: []
        }

    }
    componentDidMount() {
        RecipeService.getRecipe().then((res) => {
            this.setState({ Recipes: res.data });
        });
    }

    render() {
        return (
            <div >
                <h1 className="text-center "> Recipes Blogs </h1>
                <div className='col mt-4 mb-5'>
                    <div id="div3" className="row ">
                        <table className="table table-striped table-bordered">
                            <thead>
                                <tr>
                                    <th className='text-center'> recipeId </th>
                                    <th className='text-center'> title </th>
                                    <th className='text-center'> content </th>
                                    <th className='text-center'> author </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.Recipes.map(
                                        recipe =>
                                            <tr key={recipe.recipeId}>
                                                <td className='text-center'> {recipe.recipeId} </td>
                                                <td> {recipe.title} </td>
                                                <td> {recipe.content}</td>
                                                <td> {recipe.author} </td>
                                                
                                            </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }

}
export default ListRecipeComponent