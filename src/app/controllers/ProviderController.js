import User from '../models/User';
import File from '../models/File';

class ProviderController {
    async index(request, response) {
        const companies = await User.findAll({
            where: { provider: true },
            attributes: ['id', 'name', 'email', 'avatar_id'],
            include: [
                {
                    model: File,
                    as: 'avatar',
                    attributes: ['name', 'path', 'url'],
                },
            ],
        });

        return response.json(companies);
    }
}

export default new ProviderController();
