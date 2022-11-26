export class UserRepository {
    constructor(private readonly user: User) {}
    
    async findUserById(id: number): Promise<User> {
        return this.user.findOne(id);
    }
}