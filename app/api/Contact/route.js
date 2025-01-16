
import axios from 'axios';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const formData = req.body;

        console.log("fomrdara: ",formData)
      
        const scriptURL = 'https://script.google.com/macros/s/AKfycbxYLsh5L2NJgLXaJ5BZe7QcU-ytsTeZEXpVkcSktdSkrtnuOlSTHwKHfPYaNLWA6Fjl/exec';

        try {
            const response = await axios.post(scriptURL, formData, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            res.status(200).json(response.data);
        } catch (error) {
            console.error('Error submitting form:', error);
            res.status(500).json({ error: error.message });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
