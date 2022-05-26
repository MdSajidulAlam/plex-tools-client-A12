import React from 'react';
import useTools from '../../hooks/useTools';
import Loading from '../Shared/Loading';

const ManageProducts = () => {
    const [tools, isLoading, refetch] = useTools()
    if (isLoading) {
        return <Loading />
    }
    return (
        <div>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Quantity</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            tools.map((tool, index) => <tr>
                                <th>{index + 1}</th>
                                <td><div class="avatar">
                                    <div class="w-12">
                                        <img src={tool.img} alt='' />
                                    </div>
                                </div></td>
                                <td>{tool.name}</td>
                                <td>{tool.quantity}</td>
                                <td><button className='btn btn-xs btn-error'>Delete</button></td>
                            </tr>)
                        }




                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageProducts;