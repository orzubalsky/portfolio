from django import template

register = template.Library()

def render_project(parser, token):
    try:
        # split_contents() knows not to split quoted strings.
        args = token.split_contents()
        if len(args) == 2:
            tag_name, project = args

    except ValueError:
        raise template.TemplateSyntaxError, "%r tag requires two arguments" % token.contents.split()[0]

    return ProjectRenderNode(project)

class ProjectRenderNode(template.Node):
    def __init__(self, project):
        self.project = template.Variable(project)

    def render(self, context):
        project = self.project.resolve(context)
        
        context['project'] = project
        
        t = template.loader.get_template('render_project.html')
        
        html     = t.render(context)

        return html


register.tag('render_project', render_project)