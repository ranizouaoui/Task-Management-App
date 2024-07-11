/* eslint-disable prettier/prettier */
import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TasksService } from './tasks.service';
import { Task, TaskStatus } from './task.entity';
import { CreateTaskDto } from './create-task.dto';

describe('TasksService', () => {
  let service: TasksService;
  let repository: Repository<Task>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TasksService,
        {
          provide: getRepositoryToken(Task),
          useClass: Repository,
        },
      ],
    }).compile();

    service = module.get<TasksService>(TasksService);
    repository = module.get<Repository<Task>>(getRepositoryToken(Task));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a new task', async () => {
    const createTaskDto: CreateTaskDto = {
      title: 'Test task',
      description: 'Test description',
    };

    const task: Task = {
      id: 1,
      title: 'Test task',
      description: 'Test description',
      status: TaskStatus.PENDING,
    };

    jest.spyOn(repository, 'create').mockReturnValue(task);
    jest.spyOn(repository, 'save').mockResolvedValue(task);

    expect(await service.createTask(createTaskDto)).toEqual(task);
  });

  // Additional tests for other methods...
});
