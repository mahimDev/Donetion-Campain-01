// import { PieChart, Pie, data, Cell, colors, Bar, XAxis, YAxis } from 'recharts'
const Statistics = () => {


    return (
        <div>
            <PieChart width={730} height={250}>
                <Pie data={data} cx="50%" cy="50%" outerRadius={80} label>
                    {
                        data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={colors[index]} />
                        ))
                    }
                </Pie>
            </PieChart>
        </div>
    );
};

export default Statistics;