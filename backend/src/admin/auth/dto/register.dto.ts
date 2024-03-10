import { ApiProperty } from "@nestjs/swagger";


export class RegisterDto { 
    @ApiProperty({ type: String, description: 'Email' })
    email: string;
    @ApiProperty({ type: String, description: 'Password' })
    password: string;
    @ApiProperty({ type: String, description: 'First Name' })
    firstName: string;
    @ApiProperty({ type: String, description: 'Last Name' })
    lastName: string;
    @ApiProperty({ type: String, description: 'Phone' })
    phone: string;
}