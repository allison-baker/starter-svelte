import { faker } from '@faker-js/faker';

export async function load({ params }) {
    const { lastName } = params;

    return {
        lastName,
        title: faker.person.jobTitle(),
        phone: faker.phone.number(),
        email: faker.internet.email({lastName: `${lastName}`})
    }
}