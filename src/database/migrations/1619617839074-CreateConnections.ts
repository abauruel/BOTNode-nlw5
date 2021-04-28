import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class CreateConnections1619617839074 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'connections',
                columns: [{
                    name: "id",
                    type: "uuid",
                    isPrimary: true
                },
                {
                    name: "admin_id",
                    type: "uuid",
                    isNullable: true,
                }, {
                    name: "user_id",
                    type: "uuid"
                },
                {
                    name: "socket_id",
                    type: "varchar"
                },
                {
                    name: "created_at",
                    type: "timestamp",
                    default: "now()"

                },
                {
                    name: "updated_at",
                    type: "timestamp",
                    default: "now()"
                }
                ]
            })
        )
        await queryRunner.createForeignKey("connections",
            new TableForeignKey({
                name: "Fk_connectionUser",
                referencedTableName: "Users",
                referencedColumnNames: ["id"],
                columnNames: ["user_id"],
                onDelete: "SET NULL",
                onUpdate: "SET NULL"
            }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey("connections", "Fk_connectionUser")
        await queryRunner.dropTable("connections")
    }

}
