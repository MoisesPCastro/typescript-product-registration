import { app } from './app';
const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`SERVIDOR RODANDO NA PORTA ${PORT}`));
