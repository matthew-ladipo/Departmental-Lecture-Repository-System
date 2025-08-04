-- Seed data for the Departmental Lecture Repository System

-- Insert departments
INSERT INTO departments (id, name, description) VALUES
    ('550e8400-e29b-41d4-a716-446655440001', 'Computer Science', 'Department of Computer Science and Information Technology'),
    ('550e8400-e29b-41d4-a716-446655440002', 'Mathematics', 'Department of Mathematics and Statistics'),
    ('550e8400-e29b-41d4-a716-446655440003', 'Physics', 'Department of Physics and Astronomy'),
    ('550e8400-e29b-41d4-a716-446655440004', 'Chemistry', 'Department of Chemistry and Biochemistry'),
    ('550e8400-e29b-41d4-a716-446655440005', 'Biology', 'Department of Biology and Life Sciences');

-- Insert sample users (lecturers)
INSERT INTO users (id, email, password_hash, first_name, last_name, role, department, employee_id, specialization, bio) VALUES
    ('550e8400-e29b-41d4-a716-446655440010', 'sarah.smith@university.edu', '$2b$10$example_hash_1', 'Sarah', 'Smith', 'lecturer', 'Computer Science', 'EMP2024001', 'Machine Learning, Artificial Intelligence', 'Dr. Sarah Smith is a professor specializing in machine learning and AI research.'),
    ('550e8400-e29b-41d4-a716-446655440011', 'michael.johnson@university.edu', '$2b$10$example_hash_2', 'Michael', 'Johnson', 'lecturer', 'Mathematics', 'EMP2024002', 'Calculus, Linear Algebra', 'Prof. Michael Johnson has been teaching mathematics for over 15 years.'),
    ('550e8400-e29b-41d4-a716-446655440012', 'emily.brown@university.edu', '$2b$10$example_hash_3', 'Emily', 'Brown', 'lecturer', 'Chemistry', 'EMP2024003', 'Organic Chemistry, Biochemistry', 'Dr. Emily Brown specializes in organic chemistry and biochemical processes.'),
    ('550e8400-e29b-41d4-a716-446655440013', 'robert.wilson@university.edu', '$2b$10$example_hash_4', 'Robert', 'Wilson', 'lecturer', 'Physics', 'EMP2024004', 'Classical Mechanics, Quantum Physics', 'Dr. Robert Wilson is an expert in theoretical and applied physics.'),
    ('550e8400-e29b-41d4-a716-446655440014', 'lisa.davis@university.edu', '$2b$10$example_hash_5', 'Lisa', 'Davis', 'lecturer', 'Computer Science', 'EMP2024005', 'Database Systems, Software Engineering', 'Prof. Lisa Davis has extensive experience in database design and software development.');

-- Insert sample users (students)
INSERT INTO users (id, email, password_hash, first_name, last_name, role, department, student_id, bio) VALUES
    ('550e8400-e29b-41d4-a716-446655440020', 'john.doe@student.university.edu', '$2b$10$example_hash_6', 'John', 'Doe', 'student', 'Computer Science', 'STU2024001', 'Computer Science student passionate about machine learning and AI.'),
    ('550e8400-e29b-41d4-a716-446655440021', 'jane.smith@student.university.edu', '$2b$10$example_hash_7', 'Jane', 'Smith', 'student', 'Mathematics', 'STU2024002', 'Mathematics major interested in applied mathematics and statistics.'),
    ('550e8400-e29b-41d4-a716-446655440022', 'alex.johnson@student.university.edu', '$2b$10$example_hash_8', 'Alex', 'Johnson', 'student', 'Physics', 'STU2024003', 'Physics student focusing on quantum mechanics and theoretical physics.'),
    ('550e8400-e29b-41d4-a716-446655440023', 'maria.garcia@student.university.edu', '$2b$10$example_hash_9', 'Maria', 'Garcia', 'student', 'Chemistry', 'STU2024004', 'Chemistry student with interests in organic synthesis and drug discovery.'),
    ('550e8400-e29b-41d4-a716-446655440024', 'david.lee@student.university.edu', '$2b$10$example_hash_10', 'David', 'Lee', 'student', 'Biology', 'STU2024005', 'Biology major studying molecular biology and genetics.');

-- Insert courses
INSERT INTO courses (id, code, name, description, department_id, lecturer_id, semester, academic_year) VALUES
    ('550e8400-e29b-41d4-a716-446655440030', 'CS101', 'Introduction to Programming', 'Basic programming concepts using Python', '550e8400-e29b-41d4-a716-446655440001', '550e8400-e29b-41d4-a716-446655440010', 'Fall', '2024'),
    ('550e8400-e29b-41d4-a716-446655440031', 'CS401', 'Machine Learning', 'Advanced machine learning algorithms and applications', '550e8400-e29b-41d4-a716-446655440001', '550e8400-e29b-41d4-a716-446655440010', 'Spring', '2024'),
    ('550e8400-e29b-41d4-a716-446655440032', 'MATH201', 'Calculus II', 'Integral calculus and series', '550e8400-e29b-41d4-a716-446655440002', '550e8400-e29b-41d4-a716-446655440011', 'Fall', '2024'),
    ('550e8400-e29b-41d4-a716-446655440033', 'CHEM301', 'Organic Chemistry', 'Structure and reactions of organic compounds', '550e8400-e29b-41d4-a716-446655440004', '550e8400-e29b-41d4-a716-446655440012', 'Spring', '2024'),
    ('550e8400-e29b-41d4-a716-446655440034', 'PHYS101', 'Classical Mechanics', 'Fundamental principles of classical mechanics', '550e8400-e29b-41d4-a716-446655440003', '550e8400-e29b-41d4-a716-446655440013', 'Fall', '2024');

-- Insert sample materials
INSERT INTO materials (id, title, description, file_name, file_path, file_size, file_type, mime_type, uploader_id, course_id, department_id, category, tags) VALUES
    ('550e8400-e29b-41d4-a716-446655440040', 'Introduction to Machine Learning', 'Comprehensive guide covering supervised and unsupervised learning algorithms', 'ml_intro.pdf', '/uploads/materials/ml_intro.pdf', 2621440, 'pdf', 'application/pdf', '550e8400-e29b-41d4-a716-446655440010', '550e8400-e29b-41d4-a716-446655440031', '550e8400-e29b-41d4-a716-446655440001', 'Lecture Notes', ARRAY['machine learning', 'algorithms', 'AI', 'supervised learning']),
    ('550e8400-e29b-41d4-a716-446655440041', 'Calculus Video Lectures - Series 1', 'Complete video series covering differential and integral calculus', 'calculus_videos.mp4', '/uploads/materials/calculus_videos.mp4', 891289600, 'video', 'video/mp4', '550e8400-e29b-41d4-a716-446655440011', '550e8400-e29b-41d4-a716-446655440032', '550e8400-e29b-41d4-a716-446655440002', 'Videos', ARRAY['calculus', 'mathematics', 'derivatives', 'integrals']),
    ('550e8400-e29b-41d4-a716-446655440042', 'Organic Chemistry Lab Manual', 'Detailed laboratory procedures and safety guidelines', 'org_chem_lab.pdf', '/uploads/materials/org_chem_lab.pdf', 5452595, 'pdf', 'application/pdf', '550e8400-e29b-41d4-a716-446655440012', '550e8400-e29b-41d4-a716-446655440033', '550e8400-e29b-41d4-a716-446655440004', 'Lab Manuals', ARRAY['chemistry', 'lab', 'organic', 'experiments', 'safety']),
    ('550e8400-e29b-41d4-a716-446655440043', 'Physics Problem Sets - Mechanics', 'Collection of solved problems in classical mechanics', 'physics_problems.pdf', '/uploads/materials/physics_problems.pdf', 1887437, 'pdf', 'application/pdf', '550e8400-e29b-41d4-a716-446655440013', '550e8400-e29b-41d4-a716-446655440034', '550e8400-e29b-41d4-a716-446655440003', 'Assignments', ARRAY['physics', 'mechanics', 'problems', 'solutions']),
    ('550e8400-e29b-41d4-a716-446655440044', 'Database Design Presentation', 'Comprehensive presentation on database normalization and design', 'db_design.pptx', '/uploads/materials/db_design.pptx', 12902400, 'ppt', 'application/vnd.openxmlformats-officedocument.presentationml.presentation', '550e8400-e29b-41d4-a716-446655440014', '550e8400-e29b-41d4-a716-446655440030', '550e8400-e29b-41d4-a716-446655440001', 'Presentations', ARRAY['database', 'SQL', 'normalization', 'design', 'ER diagrams']);

-- Insert course enrollments
INSERT INTO course_enrollments (course_id, student_id) VALUES
    ('550e8400-e29b-41d4-a716-446655440031', '550e8400-e29b-41d4-a716-446655440020'),
    ('550e8400-e29b-41d4-a716-446655440032', '550e8400-e29b-41d4-a716-446655440021'),
    ('550e8400-e29b-41d4-a716-446655440033', '550e8400-e29b-41d4-a716-446655440023'),
    ('550e8400-e29b-41d4-a716-446655440034', '550e8400-e29b-41d4-a716-446655440022'),
    ('550e8400-e29b-41d4-a716-446655440030', '550e8400-e29b-41d4-a716-446655440024');

-- Insert sample downloads
INSERT INTO downloads (material_id, user_id) VALUES
    ('550e8400-e29b-41d4-a716-446655440040', '550e8400-e29b-41d4-a716-446655440020'),
    ('550e8400-e29b-41d4-a716-446655440041', '550e8400-e29b-41d4-a716-446655440021'),
    ('550e8400-e29b-41d4-a716-446655440042', '550e8400-e29b-41d4-a716-446655440023'),
    ('550e8400-e29b-41d4-a716-446655440043', '550e8400-e29b-41d4-a716-446655440022'),
    ('550e8400-e29b-41d4-a716-446655440044', '550e8400-e29b-41d4-a716-446655440020');

-- Update download counts
UPDATE materials SET download_count = 245 WHERE id = '550e8400-e29b-41d4-a716-446655440040';
UPDATE materials SET download_count = 189 WHERE id = '550e8400-e29b-41d4-a716-446655440041';
UPDATE materials SET download_count = 156 WHERE id = '550e8400-e29b-41d4-a716-446655440042';
UPDATE materials SET download_count = 203 WHERE id = '550e8400-e29b-41d4-a716-446655440043';
UPDATE materials SET download_count = 178 WHERE id = '550e8400-e29b-41d4-a716-446655440044';

-- Insert sample ratings
INSERT INTO material_ratings (material_id, user_id, rating, review) VALUES
    ('550e8400-e29b-41d4-a716-446655440040', '550e8400-e29b-41d4-a716-446655440020', 5, 'Excellent introduction to ML concepts!'),
    ('550e8400-e29b-41d4-a716-446655440041', '550e8400-e29b-41d4-a716-446655440021', 4, 'Very helpful video lectures, clear explanations.'),
    ('550e8400-e29b-41d4-a716-446655440042', '550e8400-e29b-41d4-a716-446655440023', 5, 'Comprehensive lab manual with great safety guidelines.'),
    ('550e8400-e29b-41d4-a716-446655440043', '550e8400-e29b-41d4-a716-446655440022', 4, 'Good problem sets for practice.'),
    ('550e8400-e29b-41d4-a716-446655440044', '550e8400-e29b-41d4-a716-446655440020', 5, 'Outstanding presentation on database design!');

-- Insert user settings
INSERT INTO user_settings (user_id) VALUES
    ('550e8400-e29b-41d4-a716-446655440020'),
    ('550e8400-e29b-41d4-a716-446655440021'),
    ('550e8400-e29b-41d4-a716-446655440022'),
    ('550e8400-e29b-41d4-a716-446655440023'),
    ('550e8400-e29b-41d4-a716-446655440024');
