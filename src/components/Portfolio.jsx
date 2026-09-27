import React, { Component } from 'react';
import Toolbar from './Toolbar';
import ProjectList from './ProjectList';
import projects from '../data/projects';

class Portfolio extends Component {
  constructor(props) {
    super(props);

    // Список уникальных категорий + "All" для панели фильтров
    const categories = projects.map((p) => p.category);
    const uniqueFilters = ['All', ...new Set(categories)];

    this.state = {
      activeFilter: 'All',
      filters: uniqueFilters,
      projects: projects
    };

    this.handleSelectFilter = this.handleSelectFilter.bind(this);
  }

  handleSelectFilter(filter) {
    this.setState({ activeFilter: filter });
  }

  getFilteredProjects() {
    const { activeFilter, projects } = this.state;

    if (activeFilter === 'All') {
      return projects;
    }

    return projects.filter((project) => project.category === activeFilter);
  }

  render() {
    const { filters, activeFilter } = this.state;
    const filteredProjects = this.getFilteredProjects();

    return (
      <div className="portfolio">
        <Toolbar
          filters={filters}
          selected={activeFilter}
          onSelectFilter={this.handleSelectFilter}
        />
        <ProjectList projects={filteredProjects} />
      </div>
    );
  }
}

export default Portfolio;