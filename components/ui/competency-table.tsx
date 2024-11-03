'use client'

import { useState } from 'react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Dummy data
const initialData = [
    { id: 1, name: "John Doe", department: "Engineering", role: "Software Engineer", competencyLevel: "Expert", yearsOfExperience: 8, lastReviewScore: 4.5 },
    { id: 2, name: "Jane Smith", department: "Marketing", role: "Marketing Manager", competencyLevel: "Proficient", yearsOfExperience: 6, lastReviewScore: 4.2 },
    { id: 3, name: "Mike Johnson", department: "Sales", role: "Sales Representative", competencyLevel: "Competent", yearsOfExperience: 4, lastReviewScore: 3.8 },
    { id: 4, name: "Emily Brown", department: "Human Resources", role: "HR Specialist", competencyLevel: "Proficient", yearsOfExperience: 5, lastReviewScore: 4.0 },
    { id: 5, name: "David Lee", department: "Engineering", role: "DevOps Engineer", competencyLevel: "Expert", yearsOfExperience: 7, lastReviewScore: 4.7 },
    { id: 6, name: "Sarah Wilson", department: "Marketing", role: "Content Strategist", competencyLevel: "Competent", yearsOfExperience: 3, lastReviewScore: 3.5 },
    { id: 7, name: "Robert Taylor", department: "Sales", role: "Account Manager", competencyLevel: "Proficient", yearsOfExperience: 6, lastReviewScore: 4.1 },
    { id: 8, name: "Lisa Anderson", department: "Human Resources", role: "Recruiter", competencyLevel: "Competent", yearsOfExperience: 2, lastReviewScore: 3.3 },
    { id: 9, name: "Michael Chen", department: "Engineering", role: "Data Scientist", competencyLevel: "Expert", yearsOfExperience: 9, lastReviewScore: 4.8 },
    { id: 10, name: "Amanda White", department: "Marketing", role: "Brand Manager", competencyLevel: "Proficient", yearsOfExperience: 5, lastReviewScore: 4.0 },
]

export default function CompetencyTable() {
    const [data, setData] = useState(initialData)
    const [filters, setFilters] = useState({
        name: '',
        department: 'all',
        competencyLevel: 'all',
    })

    const handleFilterChange = (key: string, value: string) => {
        setFilters(prev => ({ ...prev, [key]: value }))
    }

    const filteredData = data.filter(item =>
        item.name.toLowerCase().includes(filters.name.toLowerCase()) &&
        (filters.department === 'all' || item.department === filters.department) &&
        (filters.competencyLevel === 'all' || item.competencyLevel === filters.competencyLevel)
    )

    return (
        <div className="p-4 space-y-4">
            <h1 className="text-2xl font-bold">Employee Competency Data</h1>

            <div className="flex space-x-4">
                <Input
                    placeholder="Search by name"
                    value={filters.name}
                    onChange={(e) => handleFilterChange('name', e.target.value)}
                    className="max-w-sm"
                />
                <Select onValueChange={(value) => handleFilterChange('department', value)}>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Department" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="all">All Departments</SelectItem>
                        <SelectItem value="Engineering">Engineering</SelectItem>
                        <SelectItem value="Marketing">Marketing</SelectItem>
                        <SelectItem value="Sales">Sales</SelectItem>
                        <SelectItem value="Human Resources">Human Resources</SelectItem>
                    </SelectContent>
                </Select>
                <Select onValueChange={(value) => handleFilterChange('competencyLevel', value)}>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Competency Level" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="all">All Levels</SelectItem>
                        <SelectItem value="Expert">Expert</SelectItem>
                        <SelectItem value="Proficient">Proficient</SelectItem>
                        <SelectItem value="Competent">Competent</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Department</TableHead>
                        <TableHead>Role</TableHead>
                        <TableHead>Competency Level</TableHead>
                        <TableHead>Years of Experience</TableHead>
                        <TableHead>Last Review Score</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {filteredData.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell>{row.name}</TableCell>
                            <TableCell>{row.department}</TableCell>
                            <TableCell>{row.role}</TableCell>
                            <TableCell>{row.competencyLevel}</TableCell>
                            <TableCell>{row.yearsOfExperience}</TableCell>
                            <TableCell>{row.lastReviewScore}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}

export {
    CompetencyTable
}